---
title: 'Dynamics 365 CE 99.9% Enterprise Support'
description: 'Dynamics 365 CE 99.9% Enterprise Support As the title suggests, when dealing with D365 CE deployment projects, we expect it to fit organizational requirements to close to 99.9%. No…'
pubDate: 2022-04-28
---
Dynamics 365 CE 99.9% Enterprise Support 

 
 

As the title suggests, when dealing with D365 CE deployment projects, we expect it to fit organizational requirements to close to 99.9%. 

No I am not talking about the SLA from december 2021.

I’m trying to quantify the required features for admin, developers, and users we would expect in enterprise scenarios. Maybe not exactly that amount – and to be fair I haven’t done the calculations. But my point is that there are a few important things one needs to consider running an enterprise-scale D365 CE project. Let’s start from the top.

What do we consider being Enterprise. As a enterprise architect I would say it is the governing realm of all business processes, people, solutions and data we require to deliver a specified set of services or products to a given market. In essence this is either a company, group of companies or a business unit within a company. 

But for this article, the enterprise also emphasizes large volumes of transactions, traceability requirements, risk mitigation, scalability, Application Lifecycle support, etc. The list goes on, but all refer to the variables that occur within companies doing extensive scale activities, combining many people across many systems and solutions. 

For this article, I have focused on development and large amounts of transactions being sent to and from D365 Customer Engagement. 

**Firstly the requirement of dealing with large amounts of transactions. **

It is not unusual for large organization to deal with 100 000s of transactions daily. Transactions ranging from monetary i.e. sales orders to IT administrational such as audit logs. 

Usually, you’d have a requirement of ensuring 100% delivery of these transactions. Regardless if it is receiving or sending. To accomplish this, you need to make sure you always ensure transactions are routed and created correctly. There are many ways of achieving just that. But in simple terms – we want to avoid failure scenarios causing data loss. For the D365 Customer Engagement platform – apart from apparent bugs in logic, these failure scenarios are most commonly caused by high-level data mismatches. For example, if you use incorrect parameters in lookup fields, causing records to fail to be created. 
But ever so common, you also hit design limits in your technology. The most common technology used for transacting data in and out of the Dynamics 365 Customer Engagement platform is the standard API provided by Microsoft. These service protection limits are there to safeguard the Dynamics 365 CE platform from misuse – ultimately rendering the entire service unusable. 

[https://docs.microsoft.com/en-us/power-apps/developer/data-platform/api-limits](http://web.archive.org/web/20230724171850/https://docs.microsoft.com/en-us/power-apps/developer/data-platform/api-limits)

The limits have changed over time but currently it is limited to one user performing 8000 service calls to the API within a 5 minute sliding window. If we were to misuse this – the service responds with a 429 error. 

Naturally, Microsoft offers many ways to deal with this, and most of them will eventually provide a solution. You can add more users, segment the calls into batches, throttle the speed of calls to the API, etc. But essentially, you need to be proactive! Microsoft will not do this for you – this is something you need to plan for developing your solutions and logic.

So is this enough? Are we there? Sorry – we aren’t. 

On top of all our efforts, we also need to understand that we are not alone in providing our service as a business consultant using the Microsoft platform. Essentially we are partnering with Microsoft to deliver the service. Using cloud services means Microsoft employs most of your applications and infrastructure specialists. We also need to appreciate that services in the cloud are also hardware somewhere that needs to be correctly tuned to fit our requirements. The latter isn’t always plug n play!

I often see services such as Azure logic apps or Dynamics 365 CE API stop responding. Logic calls the API and dataverse responds with 400. 

In a recent project, we had these issues 1-2 times out of 10 000 records. It is enough to cause grave problems for an enterprise and must be dealt with. Contacting Microsoft support, you’ll learn that the only fix is to adjust the resources in their backend. So nothing you can control in advance unless you take your chances and lower the rate of transactions per minute. But by doing so – you’d never know and control other areas of logic calling the same service. So my advice to deal with these types of issues…..always do stress testing….so you do not need to stress.

Further on to the requirements gap for delivering a f**unctioning ALM with Dynamics 365 Customer Engagement. **

I am a true believer in devops and I use Azure DevOps extensively and sometimes it is the only place for all my project activites and documentation. In my previous blog article I wrote about manual intervention. It is what I use in my releases via ADO pipelines in order to complete the set of activities required where D365 CE falls short of providing programmtically ways of changing or applying logic to the D365 CE environment. Below I would like to address those activities that I wish had better ways to manipulate using codes or scripts.

Fiscal Year – required setting for most companies but not possible to set either via the API or powershell. You have to go somewhere and press a few buttons. 

App feature settings such as Export to PDF etc – you have to logon to the app and choose entities used for pdt exports.

Turn of preview features such as enhanced product experience must be done manually.

Almost all settings in powerportal admin center such as dataverse search on, audit log settings.

Register webhooks via the plug in registration tool must be done manually.

So unfortunately as of today – there are a few things hindering us from delivering a complete solution offering zero touch ALM processes dealing with the Dynamics 365 Customer Engagement.

 

 

 

### Share this:

- [Twitter](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/2022/04/28/dynamics-365-ce-99-9-enterprise-support/?share=twitter)
- [Facebook](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/2022/04/28/dynamics-365-ce-99-9-enterprise-support/?share=facebook)
- 

### Like this:

Like Loading...

 
 

 
 
 Posted on [April 28, 2022May 22, 2022](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/2022/04/28/dynamics-365-ce-99-9-enterprise-support/)Author [Magnus Oxenwaldt](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/author/magnus248a42c4e5/)Categories [Uncategorized](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/category/uncategorized/)Tags [Azure](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/tag/azure/), [CI/CD](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/tag/ci-cd/), [Devops](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/tag/devops/), [Dynamics 365](http://web.archive.org/web/20230724171850/https://oxenwaldt.com/tag/dynamics-365/)

---
*Originally published on [oxenwaldt.com](https://oxenwaldt.com/2022/04/28/dynamics-365-ce-99-9-enterprise-support/) on 2022-04-28* (recovered from web archive).
