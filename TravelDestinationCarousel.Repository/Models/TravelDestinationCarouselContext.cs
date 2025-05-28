using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TravelDestinationCarousel.Repository.Models;

public partial class TravelDestinationCarouselContext : DbContext
{
    public TravelDestinationCarouselContext()
    {
    }

    public TravelDestinationCarouselContext(DbContextOptions<TravelDestinationCarouselContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Destination> Destinations { get; set; }
#pragma warning disable CS1030
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Database=TravelDestinationCarousel;Username=postgres; password=Tatva@123");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Destination>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("Destinations_pkey");

            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone");
            entity.Property(e => e.Description).HasMaxLength(255);
            entity.Property(e => e.ImageName).HasMaxLength(255);
            entity.Property(e => e.IsActive).HasDefaultValueSql("true");
            entity.Property(e => e.LinkUrl).HasMaxLength(255);
            entity.Property(e => e.Location).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
