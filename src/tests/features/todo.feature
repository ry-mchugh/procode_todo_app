Feature: Todo List
  As a user
  I want to add and complete tasks in my todo list
  So that I can keep track of my tasks
  I want to be able to delete tasks from my todo list

  Scenario: Adding a task
    Given I am on the todo application
    When I add a task "Buy groceries"
    Then the task "Buy groceries" should be displayed in the todo list

  Scenario: Completing a task
    Given I have a task "Buy groceries" in the todo list
    When I mark the task as completed
    Then the task "Buy groceries" should be moved to the completed list

  Scenario: Deleting a task
    Given I have a task "Buy groceries" in the todo list
    When I delete the task
    Then the task "Buy groceries" should not be displayed in the todo list