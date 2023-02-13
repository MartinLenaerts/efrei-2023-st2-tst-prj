# Logs

Several different strategies have been used to test the web application.

These include manual testing, bug tracking, test automation with Playwright, and integration testing.

Let's see what we learned from these 4 sequences.


## Sequence 1 - first run of manual testing

During the sequence 1 we had manually tested the web app. We used a bug tracker to track every bugs we saw during the manual tests.

Manually testing allowed us to interact with the application close to real usage. So we could identify issues that might pass under the radar of automated tests.
Doing manual tests give us the opportunity to get the sense of the user exxperience and identify usability issues.

In the other hand, manually testing an app is time-consuming and baffling of problems.
There is also a risk of human error since testers may miss certain issues.

## Sequence 2 - second run of manual testing

During the sequence 2, some of the bugs we found are corrected. We updated the bug tracker as a result but we found that it is a repetitive tasks to re run some manual tests. It's time-consuming and we can make mistakes during the test and think that the bug is not corrected or in the other hand think that the bug is corrected and mark it resolve in the bug tracker. 

The bug tracker provides a structured way to list all bug reports and makes it easier for developpers to track and fix issues and it also helps to prioritize bug fixes and ensures that important issues are not overlooked as we see in class.

### Decision table for writing a test
| likelihood | severity | easy to write | write it? |
| --- | --- | --- | --- |
| high | high | yes | yes |
| low | low | yes | probably |
| low | high | no | don't bother |
| high | high | no | yes |

The cons of using the bug tracker that we found is that the setting up can be time-consuming and we made some mistakes like duplicates bugs and so on. The quality of bug reports is also important, if a bug report is not well explained we can't reproduce nor understand the bug.

## Sequence 3 - test automation with Playwright

During the sequence 3, we created some automated test with Playwright. Test automations help to reduce the risk of human error in testing and increases the test coverage as reducing the time during the QA. Automated tests can be scalable so we can run tests quickly and repeatedly.

The cons of it is that it requires a significant investment in terms of time and resources to set up and maintain.
But if we use the decision table for writting a test that we saw in class, automated tests are the best solution that we found using. Automated tests can also check if there is a problem of compability between versions and so we can help the developpers to not crash the app after new releases.
