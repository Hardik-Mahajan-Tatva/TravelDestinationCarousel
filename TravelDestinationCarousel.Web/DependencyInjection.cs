using System.Reflection;
using Microsoft.EntityFrameworkCore;
using TravelDestinationCarousel.Repository.Models;
namespace TravelDestinationCarousel.Web
{
    public static class DependencyInjection
    {
        public static void RegisterServices(IServiceCollection services, string connectionString)
        {
            services.AddDbContext<TravelDestinationCarouselContext>(options => options.UseNpgsql(connectionString));
            services.AddHttpContextAccessor();
            RegisterImplementations(services, "TravelDestinationCarousel.Repository");
            RegisterImplementations(services, "TravelDestinationCarousel.Service");
        }
        private static void RegisterImplementations(IServiceCollection services, string assemblyName)
        {
            if (string.IsNullOrEmpty(assemblyName))
            {
                throw new ArgumentException("Assembly name cannot be null or empty", nameof(assemblyName));
            }
            var assembly = Assembly.Load(assemblyName);
            var types = assembly.GetTypes();
            var interfaces = types.Where(t => t.IsInterface && t.Namespace is not null);
            var implementations = types.Where(t => t.IsClass && !t.IsAbstract && t.Namespace is not null);
            foreach (var serviceInterface in interfaces)
            {
                var implementation = implementations.FirstOrDefault(implementation => serviceInterface.Name[1..] == implementation.Name);
                if (implementation is not null)
                {
                    services.AddScoped(serviceInterface, implementation);
                }
            }
        }
    }
}