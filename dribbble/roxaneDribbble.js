export let accessToken=
    'e439a6dc4d286ebee41d358acbc7fba1f69ad625e4db3854d6016724a5503638';

export let name='Roxane Guella';
export let aPropos='07 82 24 19 13';

$.ajax({
    url: 'https://api.dribbble.com/v2/user?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {
        if (data.length > 0) {
            $.each(data.reverse(), function(i, val) {
                console.log(val)
            })
        }
    }
})


