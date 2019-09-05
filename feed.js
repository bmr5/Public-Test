
$(document).ready(function(){
    let storage;
    let imageBox = `
        <div class = "feed-box">
            <img class = "feed-images>
            <div class = "like-box">
                <ul class = "buttons">
                    <li>
                        <button class = "like-box-button">
                            <img class = "like-button" src="SVG's/Heart.svg" alt="nope"/>
                        </button>
                    </li>
                    <li>
                        <button class = "like-box-button">
                            <img class = "comment-button" src="SVG's/Comment.svg" alt="nope"/>
                        </button>
                    </li>
                    <li>
                        <button class = "like-box-button">
                            <img class = "bookmark-button" src="SVG's/Bookmark.svg" alt="nope"/>
                        </button>
                    </li>
                </ul>
                <p class = "like-count">20 Likes</p>
                </br>
                <div>
                    <form method = "post" onsubmit="return false" name ="comment-form" class = "comment-form">
                        <input type="text" name="comment-input" class="comment-input"
                            placeholder = "Add a comment..."/>
                        <input type="submit" name = "post-comment" class='post-comment' value="Post">
                    </form>
                </div>
            </div>
        </div>`
        
    $(".retrieve").click(function(){
        $.get('https://image-server-codesmith.firebaseapp.com/images',
        function(data, status){
            if(status == "success") {
                storage = data
            }
            if(status == "error") {
                alert("Error: " + status + ": " + status);
            }
          });
    })
    
    $(".post").click(function(){

        for (var i=0; i<storage.length; i++) {
            $('#feed').append(imageBox)
            $('#feed > div > img').last().attr('id', "image" + i)
            $('#feed > div > img').last().attr('src', storage[i])
            $('#feed > div > img').last().on('error', function(){
                $(this).parent().remove()
            })
            $('#feed > div > div > form').last().children().first().attr('id', "comment-input" + i)
            
        }
    })


    $(".comment-form").on('submit', function(){
        console.log($(this))
        $(this).append( '<p></p>')
        let inputVal = $(this).children('input').first().val()
        $(this).children('p').last().text(inputVal)
        $(this).find("input[type=text]").val('');
    })
    

})
// https://www.instagram.com//static/bundles/es6/sprite_glyphs_0f958af901cb.png/0f958af901cb.png


//things I need to do. 
//retrieve the data from the link - done
    //it already comes in an array ready to use
//I need to figure out a way to load an individual one
    //then I need to figure out a way to load all of them

//then I need to add functionality to the pictures