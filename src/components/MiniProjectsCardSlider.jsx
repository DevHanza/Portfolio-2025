import MiniProjectsCard from "./ProjectCards/Mini-Card/Mini-Project-Card";

function MiniProjectsCardSlider() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4 lg:gap-5">
      <MiniProjectsCard />
      <MiniProjectsCard />
      <MiniProjectsCard />
      <MiniProjectsCard />
    </div>
  );
}

export default MiniProjectsCardSlider;
