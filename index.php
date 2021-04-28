<?php include_once('home.html');

//$access_token=getenv('accessToken');


?>
<?php
?>

<script type="text/javascript">
var accessToken = "<?= $access_token ?>";

let aProposPerson=document.getElementById('aPropos')
let contactsPerson=document.getElementById('contact')

//add info from dribbble

$.ajax({
    url: 'https://api.dribbble.com/v2/user?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        console.log(data.links.github)
        console.log(Object.entries(data.links))
        let links=Object.entries(data.links)

        var keys = [];
        for (var key in links) {
            if (links.hasOwnProperty(key)) {
                console.log(key, links[key])
                console.log(key, links[key][0])
                $('#contact').prepend(
                    `<li><a href="${links[key][1]}">${links[key][0]}</a></li>`
                )
            }
        }

        let bio=data.bio.replaceAll('\n', '<br>')
        //contactsPerson.innerHTML=`<div><p>${data.links}</div>`
        aProposPerson.innerHTML=`<div><p>${bio}</div>`
    }
})

//add projet

$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                if(val.title.includes('#0')){
                    $('#projets').prepend(
                        '<div id="'+val.title.slice(0,-3)+'" class="carousel slide" data-ride="carousel">\n' +
                        '<ol class="carousel-indicators" id="'+val.title.slice(0,-3)+'-indicators">\n' +
                        '    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n' +
                        '</ol>\n'+
                        '<div class="carousel-inner" id="'+val.title.slice(0,-3)+'-inner">\n'+
                        '   <div class="carousel-item active">\n' +
                        '        <a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.normal +'"/></a>' +
                        '   </div>\n'+

                        '</div>\n'+
                        '<a class="carousel-control-prev" href="#'+val.title.slice(0,-3)+'" role="button" data-slide="prev">\n' +
                    '       <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
                    '       <span class="sr-only">Previous</span>\n' +
                    '   </a>\n' +
                    '   <a class="carousel-control-next" href="#'+val.title.slice(0,-3)+'" role="button" data-slide="next">\n' +
                    '       <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
                    '       <span class="sr-only">Next</span>\n' +
                    '   </a>\n'
                    )
                }else {
                    $('<div class="carousel-item">\n' +
                        '        <a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.normal +'"/></a>' +
                        '   </div>').appendTo('#'+val.title.slice(0,-3)+'-inner');
                    $('<li data-target="#carouselExampleIndicators" data-slide-to="'+val.title.slice(-1)+'"></li>').appendTo('#'+val.title.slice(0,-3)+'-indicators')

                }
            })
        }
        else {
            $('#projets').append(
                '<div id="no-shots" class="carousel slide" data-ride="carousel">\n' +
                '<div class="carousel-inner">\n'+
                '   <div class="carousel-item active">\n' +
                '        <p class="car">no shots</p>\n' +
                '   </div>\n'+
                '<a class="carousel-control-prev" href="#no-shots" role="button" data-slide="prev">\n' +
                '       <span class="carousel-control-prev-icon" aria-hidden="true"><</span>\n' +
                '       <span class="sr-only">Previous</span>\n' +
                '   </a>\n' +
                '   <a class="carousel-control-next" href="#no-shots" role="button" data-slide="next">\n' +
                '       <span class="carousel-control-next-icon" aria-hidden="true"> > </span>\n' +
                '       <span class="sr-only">Next</span>\n' +
                '   </a>\n' +
                '</div>\n'
            );
        }
    }
});

</script>

