const assert = require('chai').assert;
const { binding, given, then, when } = require('cucumber-tsflow');

@binding()
export class TodoSteps {
  private tasks: string[] = [];
  private completedTasks: string[] = [];

  @given(/^I am on the todo application$/)
  public givenIAmOnTodoApplication(): void {
    // Implement the necessary steps to navigate to the todo application
  }

  @when(/^I add a task "(.*?)"$/)
  public whenIAddTask(taskName: string): void {
    this.tasks.push(taskName);
  }

  @then(/^the task "(.*?)" should be displayed in the todo list$/)
  public thenTaskShouldBeDisplayed(taskName: string): void {
    assert.include(this.tasks, taskName);
  }

  @given(/^I have a task "(.*?)" in the todo list$/)
  public givenIHaveTaskInList(taskName: string): void {
    this.tasks.push(taskName);
  }

  @when(/^I mark the task as completed$/)
  public whenIMarkTaskCompleted(): void {
    const taskToComplete = this.tasks.pop();
    if (taskToComplete) {
      this.completedTasks.push(taskToComplete);
    }
  }

  @then(/^the task "(.*?)" should be moved to the completed list$/)
  public thenTaskShouldBeMovedToCompleted(taskName: string): void {
    assert.include(this.completedTasks, taskName);
  }
}