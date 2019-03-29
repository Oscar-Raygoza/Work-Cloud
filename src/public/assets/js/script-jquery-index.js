// TODO: 
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

$('#btn-delete').click(function(e){
    e.preventDefault();
    let publicationId = $(this).data('id');
    let action = confirm('Estas seguro de querer eliminar esta publicacion?');

    if(action){
        $.ajax({
            url: '/publications/'+ publicationId,
            type: 'DELETE'
        }).done(data =>{
            $(this).removeClass('btn-light').addClass('btn-success');
            $(this).find('i').removeClass('fa-times').addClass('fa-check');
            $(this).append('<spam>ok</spam>');
        }).catch(err =>{
            console.log(err);
        });
    }
});