$(document).ready(function() {
    $('#searchUser').on('keyup', function(e) {
        var username = e.target.value;

        ///make request to Github 
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: 'f1db5e680272ef380380',
                client_secret: '8f133860eb466cdac6805f3f4f1e666ed36a7b4d'

            }

        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: 'f1db5e680272ef380380',
                    client_secret: '8f133860eb466cdac6805f3f4f1e666ed36a7b4d',
                    sort: 'created_asc',
                    per_page: 7

                }

            }).done(function(repos) {
                $.each(repos, function(index, repo) {
                    $('#repos').append(`
                   <div class="card">
                
                   <div class="card-body">
                   <div class="row">
                   <div class="col-md-7">
                   <h4 class="card-title"><b>${repo.name}</b><sup><span class="badge badge-light badge-pill">Programming-language : ${repo.language}</span></sup></h4>

                   
                   <p class="card-text">${repo.description}</p>
                   </div>
                   <div class="col-md-3">
                   <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                   <span class="badge badge-danger">Public Gists : ${repo.watchers_count}</span>
                   <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                  
                  </div>
                  <div class="col-md-2">
                  <a target="_blank" href="${repo.html_url}" class="btn btn-success float-right ">View repository</a>
                   
                   </div>
                   
                   </div>
                     
                     
                   </div>
                 </div>
                   `)
                })

            })
            $('#profile').html(`
            <div class="card ">
            <h4 class="card-header text-center bg-info">${user.name}</h4>
            <div class="card-body">
            <div class="row">
            <div class="col-md-2">
               <img style="width:150px; height:150px;display:block" class="img-thumbnail" src="${user.avatar_url}">
               <a target="_blank" class="mt-2 btn btn-info btn-block" href="${user.html_url}" role="button">View profile</a>
        
            </div>
            <div class="col-md-10">
            
            <span class="badge badge-success">Public repos : ${user.public_repos}</span>
            <span class="badge badge-danger">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-primary">Followers: ${user.followers}</span>
            <span class="badge badge-warning">Following: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group">
            <li class="list-group-item list-group-item-success">Blog: <a target="_blank" href="${user.blog}">${user.blog}</a></li>
            <li class="list-group-item list-group-item-secondary">Company: ${user.company}</li>

            <li class="list-group-item list-group-item-danger">Location: ${user.location}</li>
            <li class="list-group-item list-group-item-warning">Email: ${user.email} </li>
            
          </ul>
        
            </div>
        </div>
              
            </div>
          </div>
          <h3>Latest repos</h3>
          <div id="repos"></div>
            `)

        })
    })
    $('#searchForm').submit(function(e) {
        e.preventDefault();
        var userName = $('#searchBox').val();

        $.ajax({
            url: 'https://api.github.com/users/' + userName,
            data: {
                client_id: 'f1db5e680272ef380380',
                client_secret: '8f133860eb466cdac6805f3f4f1e666ed36a7b4d'

            }

        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + userName + '/repos',
                data: {
                    client_id: 'f1db5e680272ef380380',
                    client_secret: '8f133860eb466cdac6805f3f4f1e666ed36a7b4d',
                    sort: 'created_asc',
                    per_page: 7

                }

            }).done(function(repos) {
                $.each(repos, function(index, repo) {
                    $('#repos').append(`
                    <div class="card">
                    
                       <div class="card-body">
                       <div class="row">
                       <div class="col-md-7">
                       <h4 class="card-title"><b>${repo.name}</b><sup><span class="badge badge-light badge-pill">Programming-language : ${repo.language}</span></sup></h4>
                       
                       <p class="card-text">${repo.description}</p>
                       </div>
                       <div class="col-md-3">
                       <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                       <span class="badge badge-danger">Public Gists : ${repo.watchers_count}</span>
                       <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                      
                      </div>
                      <div class="col-md-2">
                      <a target="_blank" href="${repo.html_url}" class="btn btn-success float-right ">View repository</a>
                       
                       </div>
                       
                       </div>
                         
                         
                       </div>
                     </div>
                   `)
                })

            })
            $('#profile').html(`
            <div class="card ">
            <h4 class="card-header text-center bg-info">${user.name}</h4>
            <div class="card-body">
            <div class="row">
            <div class="col-md-2">
               <img style="width:150px; height:150px;display:block" class="img-thumbnail" src="${user.avatar_url}">
               <a target="_blank" class="mt-2 btn btn-info btn-block" href="${user.html_url}" role="button">View profile</a>
        
            </div>
            <div class="col-md-10">
            
            <span class="badge badge-success">Public repos : ${user.public_repos}</span>
            <span class="badge badge-danger">Public Gists : ${user.public_gists}</span>
            <span class="badge badge-primary">Followers: ${user.followers}</span>
            <span class="badge badge-warning">Following: ${user.following}</span>
            <br>
            <br>
            <ul class="list-group">
            <li class="list-group-item list-group-item-success">Blog: <a target="_blank" href="${user.blog}">${user.blog}</a></li>
            <li class="list-group-item list-group-item-secondary">Company: ${user.company}</li>

            <li class="list-group-item list-group-item-danger">Location: ${user.location}</li>
            <li class="list-group-item list-group-item-warning">Email: ${user.email} </li>
            
          </ul>
        
            </div>
        </div>
              
            </div>
          </div>
          <h3>Latest repos</h3>
          <div id="repos"></div>
            `)

        })
    })
})