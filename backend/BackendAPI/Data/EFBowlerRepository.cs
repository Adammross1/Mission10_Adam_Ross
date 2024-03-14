
using Microsoft.EntityFrameworkCore;

namespace BackendAPI.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlersContext _bowlersContext;

        public EFBowlerRepository(BowlersContext temp) {
            _bowlersContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlersContext.Bowlers
            .Where(b => b.Team.TeamName == "Sharks" || b.Team.TeamName == "Marlins")
            .Include(b => b.Team);
        public IEnumerable<Team> Teams => _bowlersContext.Teams;
    }
}
