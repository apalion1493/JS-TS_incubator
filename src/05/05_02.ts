import {GovernmentBuildingType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}