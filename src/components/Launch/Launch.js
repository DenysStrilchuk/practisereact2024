const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    const missionPatchSmall = links.mission_patch_small;
    return (
        <div>
            <div>Mission name: {mission_name}</div>
            <div>Year: {launch_year}</div>
            <img src={missionPatchSmall} alt={mission_name}/>
        </div>
    );
};
export {Launch};