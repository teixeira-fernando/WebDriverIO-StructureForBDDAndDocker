Feature: Google Search

    As a user on the Google site
    I want to search a term
    Because I want to know its meaning

    @API
    Scenario: Search results list
        Given I am on the initial google website page
        When I type the term "testing"
        And Click on search button
        Then A list of related results should be returned