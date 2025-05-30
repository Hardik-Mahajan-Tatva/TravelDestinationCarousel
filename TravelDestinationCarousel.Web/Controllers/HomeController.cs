using Microsoft.AspNetCore.Mvc;
using TravelDestinationCarousel.Service.Interfaces;

namespace TravelDestinationCarousel.Web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IDestinationService _destinationService;

    public HomeController(ILogger<HomeController> logger, IDestinationService service)
    {
        _logger = logger;
        _destinationService = service;
    }
    public IActionResult Index()
    {
        return View();
    }
    public async Task<IActionResult> GetActiveDestinations()
    {
        var destinations = await _destinationService.GetActiveDestinationsAsync();
        return Ok(destinations);
    }
}
