//enter ajax
//XMLHTTPRequest
//fetch()
//arrow function

/*	var promesa = fetch('http://ap.github.com/users/leodufer');

		promesa.then( x=> console.log(x))
				.catch(x=>console.error(x));

*/

	/*$.ajax({
		type:'GET'
	});*/ 

	
	$('form').submit(function(event) {
		event.preventDefault();
		//serialize
		//serializeArray
		//val
		var login = $('input').val();
		var promesa = $.get('https://api.github.com/users/'+login);
		promesa
			.done(showUserInfo)      //showuserinfo recibe el parametro y lo devuelve con la promesa 
			.done(showUserfollowers)
			.fail(showError);                  //son funciones declarativas
	});



	function showUserInfo(user){
		$('#username').text(user.name);
		$('#location').text(user.location);
		$('#avatar').attr('src',user.avatar_url);
		$('followers').text(user.followers);
		$('following').text('following: '+user.following);

	}
	function showError(error){
		$('#error').show(1000)
					.slideUp(5000, function(){
    					$('#error').hide(10000)	
					});
	}


function getFollowers(login){
	$get('https://api.github.com/users/'+login+'/followers')
		.done(showUserFollowers)
		.fail(showError)
}

function showUserfollowers(followers){
	var template = $('#template')

	for (var i = 0; i <followers.length; i++) {

		var f = followers[i];
		var followersTpl = $(template);
		followers.find('h3').text(f.login);
		followers.find('img').attr('src', f.avatar1_url);
		/*demas atributos*/
		$('#followers-list').append(followersTpl);
	}
}
