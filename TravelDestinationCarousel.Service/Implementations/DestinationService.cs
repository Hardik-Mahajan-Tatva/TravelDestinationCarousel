using TravelDestinationCarousel.Repository.Interfaces;
using TravelDestinationCarousel.Repository.ViewModels;
using TravelDestinationCarousel.Service.Interfaces;

namespace TravelDestinationCarousel.Service.Implementations;

public class DestinationService : IDestinationService
{
    private readonly IDestinationRepository _repository;

    public DestinationService(IDestinationRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<DestinationViewModel>> GetActiveDestinationsAsync()
    {
        var result = await _repository.GetActiveDestinationsAsync();

        var viewModelList = result.Select(d => new DestinationViewModel
        {
            Id = d.Id,
            Name = d.Name,
            ImageName = d.ImageName,
            Description = d.Description,
            Location = d.Location,
            LinkUrl = d.LinkUrl,
            IsActive = d.IsActive,
            DisplayOrder = d.DisplayOrder,
            IsHero = d.Ishero ?? false,
        }).ToList();

        return viewModelList;
    }

}
