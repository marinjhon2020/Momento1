let controller = {
    home: (req, res) =>{
        return res.send({
            message: "Bienvenidos"
        });
    },
    cesde: (req, res) =>{
        return res.send({
            message: " Hola soy la cesde"
        });
    },
    data: (req, res) =>{
        return res.send({
            message: " Hola soy la data"
        });
    },
    producto: (req, res) => {
        if(!req.body.nombreProducto || !req.body.valor || !req.body.unidadesDisponibles)
        {
            if(!req.body.nombreProducto){
                return res.send({
                    error: "nombreProducto es vacio"
                })
            }
            else if(!req.body.valor){
                return res.send({
                    error: "valor es vacio"
                })
            }
            else{
                return res.send({
                    error: "unidadesDisponibles es vacio"
                })
            }
        }
        else{
            
            if (isNaN(req.body.valor) || isNaN(req.body.unidadesDisponibles)) {
                return res.send({
                    message: "valor o unidadesDisponibles no es un numeros"
                })
            }
            else{
                req.body.estado = "success";
                return res.json(req.body)

            }
        }
        
    },
    usuario: (req, res) => {
        if(!req.body.nombreUsuario || !req.body.password || !req.body.cedula)
        {
            return res.send({
                error: "Debe llenar todos los campos"
            })
        }
        else if(req.body.password.length > 8){
            return res.send({
                error: "La cedula excede el limite"
            })
        }
        else{
            return res.send({
                login: "success"
            })
        }
        
    },
}
module.exports = controller;