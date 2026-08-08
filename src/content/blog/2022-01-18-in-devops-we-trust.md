---
title: 'In DevOps we trust'
description: 'In DevOps we trust ## In DevOps we trust – to not become fools in love! Recently I was challenged as a solution architect to deliver a fairly large project with a fixed hard date f…'
pubDate: 2022-01-18
---
In DevOps we trust 

 
 

## In DevOps we trust – to not become fools in love!

Recently I was challenged as a solution architect to deliver a fairly large project with a fixed hard date for go live. The deliver was far from out of the box and required thousands of development hours. With that said I knew there were very little margin for errors in the various stage release processes. So, I decided to yet again revisit the possibility to deliver a full fledge CI/CD configuration via Azure DevOps for Dynamics 365 Sales and Azure services. The spoiler is that I might have a crush but I am yet not in love!

Now to why I still think we have some more land to cover before I am smiling through the whole sentence proclaiming the ALM possibilities with Dynamics 365 Sales.

First of my ambition was to avoid manual steps in the deployment process. This is in my view not obligatory in CI/CD but best practice. Adding manual steps into any process is similar to the famous “broken window” policy. The broken windows policy simply explains that crime could start with the overseeing the simplest degradation in society. First it is a broken window…which ultimately could lead to a chain of events allowing the culprit to nestle its way into a controlled environment and do harm. Same goes for many processes and ALM is no different. Which leads me to my first problem with the current ALM possibilities and Dynamics 365 Sales.
 

It is not possible to automate all parts of Dynamics 365 Sales programatically!

But all is not lost of course. There is a feature within Azure DevOps Pipeline called manual interventions. This is by far not a new feature and not something unique for Azure DevOps.

Please reference to Microsoft Docs here

[https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/manual-intervention?view=azure-devops](http://web.archive.org/web/20230328222033/https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/manual-intervention?view=azure-devops)

Basically, what it does is pausing your current pipeline flow and let you continue automation after you have manually deployed or made changes outside the automation within the Pipeline. This is in my view ingenious and simple at the same time. They usually go hand in hand.

This merge of manual and automation is something oftentimes missing in process-oriented solution systems.

I would love to see this type of behavioral input possibilities in other systems without requiring development and customization.

So to summarize – Dynamics 365 Sales + Azure Devops + Manual Interventions = almost complete ALM 😊

### Share this:

- [Twitter](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/2022/01/18/in-devops-we-trust/?share=twitter)
- [Facebook](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/2022/01/18/in-devops-we-trust/?share=facebook)
- 

### Like this:

Like Loading...

 
 

 
 
 Posted on [January 18, 2022January 18, 2022](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/2022/01/18/in-devops-we-trust/)Author [Magnus Oxenwaldt](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/author/magnus248a42c4e5/)Categories [Uncategorized](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/category/uncategorized/)Tags [Azure](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/tag/azure/), [CI/CD](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/tag/ci-cd/), [Devops](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/tag/devops/), [Dynamics 365](http://web.archive.org/web/20230328222033/https://oxenwaldt.com/tag/dynamics-365/)

---
*Originally published on [oxenwaldt.com](https://oxenwaldt.com/2022/01/18/in-devops-we-trust/) on 2022-01-18* (recovered from web archive).
