$(document).ready(function(){
  //selecionando todos os itens que possuem o atributo data-group
  $('[data-group]').each(function(){
    //selecionando todos os data-target dentro de cada data-group
    let $allTarget = $(this).find('[data-target]'),
    //selecionando todos os data-click dentro de cada data-group
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';
    //adicionando classe active ao primeiro datatarget e ao data-click dentro do data-group
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    //criando a função de clique para cada botão
    $allClick.click(function(e){
      e.preventDefault();

      let id = $(this).data('click'),
          $target = $('[data-target="' + id + '"]');//o id é referene ao que está preenchido em data-click (fox, firefox, wolf, estrada, sol, verde)
      //console.log(id)
      $allClick.removeClass(activeClass);
      $allTarget.removeClass(activeClass);

      $target.addClass(activeClass);
      $(this).addClass(activeClass);
    });
  });
});