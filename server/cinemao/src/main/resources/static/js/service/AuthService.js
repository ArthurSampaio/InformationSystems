
/**
 * Entity to deal with authentication 
 */
angular.module('myApp').service('AuthService', function (QueryService) {

    const PERFIL = "PERFIL";
    const WATCHLIST = "WATCHLIST";

    function _login(email, password) {

        return QueryService.makeLogin(email, password).then(
            function (response) {
                const data = response.data;

                //TODO: colocar os valores no user atual. 
                return _takeAttrUser(data);
            }, function (error) {
                console.log(error);
                return error;
            }
        )
    }

    function _takeAttrUser(data) {
        return QueryService.seriesByUserID(data.id).then(
            function (response) {
                const series = response.data;

                let perfil = series.filter((item) => {
                    return item.inList == PERFIL;
                })
                let watchlist = series.filter((item) => {
                    return item.inList == WATCHLIST;
                })

                localStorage.clear();
                const user = new User(data.id, data.username, data.email, watchlist, perfil)

                localStorage.setItem('USER', JSON.stringify(user));
                return user;

            }, function (error) {
                return error.data;
            }
        )

    }

     function _registerAccount(user) {

        return QueryService.registerUser(user);

    }


    return {
        login : _login, 
        registerAccount :_registerAccount 
    }


})
