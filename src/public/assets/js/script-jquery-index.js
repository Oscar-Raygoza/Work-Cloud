$(function() {

    $('#block-hidden').hide();

    $('#btn-toggle-comment').click((e) =>{
        e.preventDefault();
        $('#block-hidden').slideToggle();
    })

    $('#btn-like').click(function(e){
        e.preventDefault();
        const publicationId = $(this).data('id');

        $.post('/publications/'+ publicationId+'/like')
            .done(data =>{
                $('.likes-count').text(data.likes);
            }).catch(err =>{
                console.log(err);
            })
    });

    /*  DELETE PUBLICATION */
    $('#btn-delete').click(function (e) {
        e.preventDefault();
        let $this = $(this);
        const response = confirm('¿Estas seguro de querer eliminar esta publicacion?');
        console.log(response);

        if (response) {
        console.log("entry in response");

        let id = $(this).data('id');
        $.ajax({
            url: '/publications/' + id,
            type: 'DELETE'
        })
            .done(function(result) {
                console.log(
                    "sad: "+result
                );
            $this.removeClass('btn-light').addClass('btn-success');
            $this.find('i').removeClass('fa-times').addClass('fa-check');
            $this.append('<span>Deleted!</span>');
            });
        }
    });

});