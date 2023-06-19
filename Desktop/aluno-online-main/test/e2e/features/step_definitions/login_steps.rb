Dado('que um aluno acessa a página inicial') do
    visit('/')
end
  
Quando('ele informar a matricula {string} e a senha {string}') do |matricula, senha|
    fill_in('inputMatricula', with: matricula)
    fill_in('inputSenha', with: senha)
    click_button('Entrar')
end
  
Então('ele deveria ver a mensagem {string}') do |msg|
    page.assert_text(msg)
end