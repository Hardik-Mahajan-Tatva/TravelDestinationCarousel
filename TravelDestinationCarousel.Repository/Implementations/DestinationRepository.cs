using Microsoft.EntityFrameworkCore;
using TravelDestinationCarousel.Repository.Interfaces;
using TravelDestinationCarousel.Repository.Models;

namespace TravelDestinationCarousel.Repository.Implementations;

public class DestinationRepository : IDestinationRepository
{
    private readonly TravelDestinationCarouselContext _context;

    public DestinationRepository(TravelDestinationCarouselContext context)
    {
        _context = context;
    }

    public async Task<List<Destination>> GetActiveDestinationsAsync()
    {
        return await _context.Destinations
                             .Where(d => d.IsActive ?? true)
                             .OrderBy(d => d.DisplayOrder)
                             .ToListAsync();
    }
}
