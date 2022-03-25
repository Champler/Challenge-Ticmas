import db from '../database/models'

export const createActor = async (data) => {
    const actor = await db.actor.create(data)
    
    return actor;
};

export const findActor = async (data) => {
    const actor = await db.actor.findOne({where: { full_name: data }})

    return actor;
};