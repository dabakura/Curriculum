using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Curriculum.Entities
{
    public interface IFirebaseContext
    {
        DbSet<Information> Informations { get; set; }
        DbSet<Knowledge> Knowledges { get; set; }
        DbSet<Project> Projects { get; set; }
        //DbSet<AdminEntity> Admins { get; set; }
        //DbSet<BookingEntity> Bookings { get; set; }
        //DbSet<OfficeEntity> Offices { get; set; }
        //DbSet<Offices2RoomsEntity> Offices2Rooms { get; set; }
        //DbSet<Services2RoomsEntity> Services2Rooms { get; set; }
        //DbSet<RoomEntity> Rooms { get; set; }
        //DbSet<ServiceEntity> Services { get; set; }
        //DbSet<TEntity> Set<TEntity>() where TEntity : class;
        //DatabaseFacade Database { get; }
        //Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
        //Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default);
    }
}
