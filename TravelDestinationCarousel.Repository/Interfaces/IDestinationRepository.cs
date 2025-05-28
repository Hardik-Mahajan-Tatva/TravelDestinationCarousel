using TravelDestinationCarousel.Repository.Models;

namespace TravelDestinationCarousel.Repository.Interfaces;

public interface IDestinationRepository
{
    Task<List<Destination>> GetActiveDestinationsAsync();
}
