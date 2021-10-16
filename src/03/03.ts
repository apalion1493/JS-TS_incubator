import {StudentType} from '../02/02'
import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget
}

export function repairHouse(house: HouseType) {
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingType, staffToFire: number) {
    building.staffCount -= staffToFire
}