var searchButton = document.getElementById("button-1");
var name1 = document.getElementById("name1");
var username1 = document.getElementById("username1");
var profileImage = document.getElementById("profileImage");
//profile data
var userinfoName = document.getElementById("userinfoName");
var userinfoCompany = document.getElementById("userinfoCompany");
var userinfoLocation = document.getElementById("userinfoLocation");
var userinfoBlog = document.getElementById("userinfoBlog");
var userinfoPublicRepo = document.getElementById("userinfoPublicRepo");


//
var repo_length = document.getElementById("repo_length");
var follower_number = document.getElementById("follower_number");
var blog_link = document.getElementById("blog_link");

// repo list 
var showRepoList = document.getElementById("showRepoList");

// followers
var showFollowers = document.getElementById("showFollowers");

//
var allDataContainer = document.getElementById("allDataContainer");


$("#allDataContainer").hide();

// profile
var getGitUser = async () => {
    var getGitUserId = document.getElementById("getGitUserId").value;
    // event.preventDefault;
    // fetch code 
    showRepoList.innerHTML = `  <tr>
                         </tr> ` ;


    // default folloer
    showFollowers.innerHTML = `<div class="col-4 col-md-3" style="display:none !important;">
                              
                            </div>`;

    if (getGitUserId == "") {
        $("#allDataContainer").hide();

        alert("Please Enter UserID")
    } else {
        $("#allDataContainer").show();

        try {
            var api = `https://api.github.com/users/${getGitUserId}`;
            var response = await fetch(`${api}`);
            var userData = await response.json();
            if (userData.name == undefined) {
                $("#allDataContainer").hide();
                alert("Please Enter Valid User Id");
            }
            name1.innerHTML = userData.name;
            profileImage.src = userData.avatar_url;
            username1.innerHTML = userData.login;
            userinfoName.innerHTML = userData.name;
            userinfoCompany.innerHTML = (userData.company == null) ? "Info Not Provided" : userData.company;
            userinfoLocation.innerHTML = (userData.location == null) ? "Info Not Provided" : userData.location;
            blog_link.innerHTML = (userData.blog == null || userData.blog == "") ? "Info Not Provided" : userData.blog;
            userinfoPublicRepo.innerHTML = userData.public_repos;
            repo_length.innerHTML = userData.public_repos;
            follower_number.innerHTML = userData.followers;
            blog_link.href = `https://${userData.blog}`;

        } catch (error) {
            // alert("Error");
        }

        // get reposit
        try {
            var repo_api = `https://api.github.com/users/${getGitUserId}/repos`;
            var repoResponse = await fetch(repo_api);
            var repoData = await repoResponse.json();
            console.log(repoData.length);


        } catch (error) {
            console.log("repo not get");
        }
        for (i = 0; i < repoData.length; i++) {
            var row = `  <tr class="animate__animated animate__repeat-1 animate__fadeInUp">
                          <th scope="row"> ${repoData[i].name}</th>
                         <td>${repoData[i].owner.login}</td>
                         <td><a target="_blank" class="btn btn-sm btn-secondary" href="${repoData[i].html_url}"><i class="fa fa-github-alt"></i> GitHub</a></td>
                         </tr> `;
            showRepoList.innerHTML += row;

        };
        // get follwer list
        try {
            var followerAPI = `https://api.github.com/users/${getGitUserId}/followers`;
            var followerResponse = await fetch(followerAPI);
            var followerData = await followerResponse.json();


        } catch (error) {
            console.log("getting error to display follwers");
        }
        for (var j = 0; j <= followerData.length; j++) {

            showFollowers.innerHTML += `<div class="col-6 col-md-3">
                                <div class="animate__animated animate__repeat-1 animate__fadeInUp">
                                    <div class="card" >
                                        <div class="card-body">
                                            <figure class="follower-img">
                                                <img src="${followerData[j].avatar_url}" alt="">
                                            </figure>
                                        </div>
                                        <div class="card-footer">
                                            <p class="text-center text-light">${followerData[j].login}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            console.log('working');
        };


    }
    window.location.href = "#Repo";
}
searchButton.addEventListener('click', getGitUser);