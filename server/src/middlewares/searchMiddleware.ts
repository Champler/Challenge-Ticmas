export const searchMiddleware = (req, res, next) =>{
    let search = req.query.search
    if(req.query.search === null){
        search = ''
    }
    if(!search  || req.query.page == 0 || !req.query.page){
        throw new Error('Faltan parametros en su búsqueda')
    }


    next()
} 