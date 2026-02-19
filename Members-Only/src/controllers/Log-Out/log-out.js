export function LogOutController(request, response, next){
    request.logout((error) =>{
        if (error){
            return next(error)
        }
        response.redirect("/");
    });
};