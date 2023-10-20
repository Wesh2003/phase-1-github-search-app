
document.addEventListener('DOMContentLoaded', (event)=>{
    document.getElementById('github-form').addEventListener('submit',function(e){
    e.preventDefault();
    let UserN = document.querySelector('#search').value;

    fetch('https://api.github.com/users/'+UserN)
        .then( response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#user-list').innerHTML = `
                <li><h2>${data.login}</h2></li>
                <li><img src = "${data.avatar_url}"/></li>
                <li><a target = "_blank"  href = "${data.html_url}">User Page</a></li>

            `

            document.querySelector('#repos-list').innerHTML = `
                <li><a target = "_blank" href = "${data.repos_url}">User Repos</a></li>

            `

        }
            )
        

        
    }
    )
}
)
