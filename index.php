<?php include_once('home.html');

$access_token=getenv('accessToken');


?>
<?php
?>

<script type="text/javascript">
var accessToken = "<?= getenv('accessToken') ?>";

let aProposPerson=document.getElementById('aPropos')
let contactsPerson=document.getElementById('contact')

//add info from dribbble

$.ajax({
    url: 'https://api.dribbble.com/v2/user?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        let links=Object.entries(data.links)

        var keys = [];
        for (var key in links) {
            if (links.hasOwnProperty(key)) {
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
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken+'&per_page',
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                let title=val.title.slice(0,-3).toLowerCase().replaceAll(' ', '_')
                let inData
                if(val.description!==null){
                    inData='<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title.slice(0,-3) + '"><div class="title">' + val.title.slice(0,-3) + '</div><img src="'+ val.images.hidpi +'"/><p>"'+val.description+'"</p></a>'
                }else{
                    inData='<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title.slice(0,-3) + '"><div class="title">' + val.title.slice(0,-3) + '</div><img src="'+ val.images.hidpi +'"/></a>'
                }
                
                if(val.title.includes('#1')){
                    $('#projets').prepend(
                        '<div id="'+title+'" class="carousel slide" data-ride="carousel">\n' +
                        '<ol class="carousel-indicators" id="'+title+'-indicators">\n' +
                        '    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>\n' +
                        '</ol>\n'+
                        '<div class="carousel-inner" id="'+title+'-inner">\n'+
                        '   <div class="carousel-item active">\n' +
                        inData +
                        '   </div>\n'+

                        '</div>\n'+
                        '<a class="carousel-control-prev" href="#'+title+'" role="button" data-slide="prev">\n' +
                    '       <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
                    '       <span class="sr-only">Previous</span>\n' +
                    '   </a>\n' +
                    '   <a class="carousel-control-next" href="#'+title+'" role="button" data-slide="next">\n' +
                    '       <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
                    '       <span class="sr-only">Next</span>\n' +
                    '   </a>\n'
                        
                    )
                }else{
                    $('#'+title+'-inner').append(
                        '<div class="carousel-item">\n' +
                        inData +
                        '   </div>'
                    )
                    $('#'+title+'-indicators').append('<li data-target="#carouselExampleIndicators" data-slide-to="'+val.title.slice(-1)+'"></li>')
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

