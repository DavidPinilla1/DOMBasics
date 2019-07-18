const users = [
    { username: 'pedro87', email: 'pedro87@gmail.com' },
    { username: 'juan96', email: 'juan96@hotmail.com' },
    { username: 'jose84', email: 'jose84@gmail.com' }
]
const updateUsers = () => {
    document.querySelector( '.users' ).innerHTML = `
      <div class="header">
         <h3>Username</h3>
          <h3>Email</h3>
      </div>`
    users.forEach( user => {
        const userDiv = document.createElement( 'div' );
        userDiv.className = 'user';
        userDiv.innerHTML = `
   <span class="name">username:${user.username}</span>
   <span class="email"> email:${user.email}</span>
   `
        document.querySelector( '.users' ).appendChild( userDiv )
    } )
}
document.querySelector( 'body' ).addEventListener( 'mouseover', event => {
    document.querySelector( '.header' ).style.backgroundColor = `rgb( ${event.clientX}, ${event.clientY},120 )`
} )
updateUsers();
document.querySelector( '.usernameInput' ).addEventListener( 'keyup', event => {
    
        users[ 0 ].username = event.target.value
        updateUsers();
    
} )
