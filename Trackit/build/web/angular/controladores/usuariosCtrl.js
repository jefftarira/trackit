var app = angular.module('alumnosApp.usuariosCtrl', []);

/*Controlador de usuarios*/


app.controller('usuariosCtrl', ['$scope','Usuarios', function($scope,Usuarios){

	$scope.activar('mUsuarios','','Usuarios','Lista');

	$scope.usuarios = Usuarios;
	$scope.usuarioSel = {};
	$scope.usuarioEd = {};


	$scope.moverA = function(pag) {
		Usuarios.cargarPagina(pag).then( function(){
			$scope.usuarios = Usuarios;
		});
	};

	$scope.selUsuario = function(usuario){
		angular.copy( usuario, $scope.usuarioSel);
	};

	$scope.moverA(1);

	/*Mostrar modal usuario en modo edicion y crear  */

	$scope.editar = function(usuario){
		$scope.usuarioEd = {};
		toastr.info('Cargando...', '',{"positionClass": "toast-bottom-center"});
		Usuarios.cargarUsuario(usuario).then(function(){
			$("#modal_usuario").modal({backdrop: 'static'});
			$scope.usuarioEd = Usuarios.usuario;
			toastr.remove();
		});
	};

	// $scope.mostrarModal = function(usuario){
	// 	$scope.usuarioEd = {};
	// 	angular.copy(usuario,$scope.usuarioEd);
	// 	console.log($scope.usuarioEd);
	// 	/*Usuarios.cargarUsuario(usuarioSel).then(function(){
	// 		$scope.usuarioEd = Usuarios.usuario;
	// 	});*/

	// 	$("#modal_cliente").modal();
	// };

	$scope.guardarUsuario = function(usuario){
		Usuarios.guardarUsuario(usuario).then( function(){

		});
	}

}]);