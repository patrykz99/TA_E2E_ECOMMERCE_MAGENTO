Feature: Logowanie do sklepu Hyva Demo
    Jako zarejestrowany klient
    Chcę zalogować się do swojego konta
    Aby mieć dostęp do historii zamówień i ustawień

    Background:
        Given Użytkownik jest na stronie logowania

    Scenario: Poprawne logowanie do konta
        When Użytkownik wprowadza poprawny email i hasło
        And Klika przycisk logowania
        Then Powinien zobaczyć panel klienta z nagłówkiem "My Account"

    Scenario Outline: Próba logowania z niepoprawnymi danymi
        When Użytkownik wprowadza email "<email>" i hasło "<password>"
        And Klika przycisk logowania
        Then Powinien zobaczyć komunikat błędu "The account sign-in was incorrect"

        Examples:
            | email                  | password       |
            | wrong@example.com      | wrongpass      |
            | user@example.com       | wrongpass      |
            | invalid-email-format   | password123    |

    Scenario: Walidacja pustych pól formularza
        When Użytkownik klika przycisk logowania bez wprowadzania danych
        Then Powinien zobaczyć komunikat wymagania pola dla emaila i hasła

    Scenario: Nawigacja do odzyskiwania hasła
        When Użytkownik klika link "Forgot Your Password?"
        Then Powinien zostać przekierowany na stronę odzyskiwania hasła
