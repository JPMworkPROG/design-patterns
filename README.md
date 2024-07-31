# Projeto de Padrões de Projeto em TypeScript

Este repositório contém implementações de vários padrões de design de software usando TypeScript. Os padrões abordados são frequentemente usados para resolver problemas comuns de design e estrutura em sistemas de software.

## Padrões Criacionais

1. **Factory Method**
   - O padrão Factory Method define uma interface para criar um objeto, mas permite que as subclasses alterem o tipo de objetos que serão criados. Esse padrão é utilizado para delegar a responsabilidade de instanciar uma classe para subclasses, promovendo flexibilidade e extensibilidade.

2. **Abstract Factory**
   - O padrão Abstract Factory oferece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. Isso é útil para quando uma família de produtos precisa ser usada em conjunto, e é necessário garantir a consistência.

3. **Prototype**
   - O padrão Prototype permite a criação de novos objetos clonando uma instância existente. Esse padrão é particularmente útil para a criação de objetos que são caros de criar diretamente ou que precisam ser replicados de forma consistente.

4. **Builder**
   - O padrão Builder separa a construção de um objeto complexo de sua representação, permitindo a criação de diferentes representações do objeto. Esse padrão é útil quando a construção de um objeto envolve várias etapas que podem ser customizadas ou variáveis.

5. **Singleton**
   - O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a essa instância. Isso é útil para gerenciar recursos que devem ter uma única instância, como conexões de banco de dados ou gerenciadores de configuração.
