using TravelDestinationCarousel.Repository.ViewModels;

namespace TravelDestinationCarousel.Service.Interfaces;

public interface IDestinationService
{
    Task<List<DestinationViewModel>> GetActiveDestinationsAsync();
}
