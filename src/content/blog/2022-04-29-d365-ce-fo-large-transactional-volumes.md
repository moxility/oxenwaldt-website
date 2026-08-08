---
title: 'D365 CE + FO + Large transactional volumes'
description: 'D365 CE + FO + Large transactional volumes When integrating Dynamics 365 CE (Customer Engagement) Platform which is based on Microsoft Dataverse with D365 FO (Finance and Operation…'
pubDate: 2022-04-29
---
D365 CE + FO + Large transactional volumes 

 
 

When integrating Dynamics 365 CE (Customer Engagement) Platform which is based on Microsoft Dataverse with D365 FO (Finance and Operations) we have a few options.

The suggested Microsoft method is to use Dual-write if we require synchronous replication of data between those two applications. Dual-write has a lot of out-of-box capabilities two accomplish a functioning link between D365 CE and FO – but in my experience, this works only well where the use case does not involve a large number of transactions over a short time frame. 

The integration templates include a lot of different tables and there are many standard integrations out-of-box for both D365 Sales and Field Service. But as soon as you wish to adjust and add then you will immediately hit various challenges.

You will learn that the Dual write is still a very immature product and has still bugs that you will need to understand and create workarounds for. You will realize that the GUI has limitations and you’ll learn how to deal with those. You will appreciate that many of the D365 FO entities do not support Dualwrite because it lacks the possibility to access data via the odata web API. 

But when you finally overcome all these teething issues I believe Dual-Write is struggling with – then you need to appreciate the following do’s and do not’s that Microsoft has manifested. 

Out from our previous enterprise definition – we would not see many use cases fitting the above list.

Especially you would most often have multiple instances for D365 CE.

But even if you do fulfill the above list you’d soon hit a wall in terms of large volumes.

Not because dual write has issues dealing with large volumes – but for the fact that I would always try to avoid synchronous solutions for large volumes. I’d always try to design large transactional flows using a decoupled model. There are multiple scenarios where data can fail to (CRUD) create, read, updated, or deleted. We need to take this into account and have ways to deal with these failures and allow the users to make guided decisions to rectify data and proceed.

To analyze and rectify issues with data synch using dual write is truly a technical administrative task.

In addition, we need to consider the API service protection limits with Dynamics 365 CE. Dual-write does not consider other sources or logic for changing the same data and therefore it is a pain to have centralized control of all the CRUDs.

So still as of today 29th April 2022 – I would use other technologies than dual write in any given enterprise scenario. 

### Share this:

- [Twitter](http://web.archive.org/web/20230607183846/https://oxenwaldt.com/2022/04/29/d365-ce-fo-large-transactional-volumes/?share=twitter)
- [Facebook](http://web.archive.org/web/20230607183846/https://oxenwaldt.com/2022/04/29/d365-ce-fo-large-transactional-volumes/?share=facebook)
- 

### Like this:

Like Loading...

 
 

 
 
 Posted on [April 29, 2022May 22, 2022](http://web.archive.org/web/20230607183846/https://oxenwaldt.com/2022/04/29/d365-ce-fo-large-transactional-volumes/)Author [Magnus Oxenwaldt](http://web.archive.org/web/20230607183846/https://oxenwaldt.com/author/magnus248a42c4e5/)Categories [Uncategorized](http://web.archive.org/web/20230607183846/https://oxenwaldt.com/category/uncategorized/)

---
*Originally published on [oxenwaldt.com](https://oxenwaldt.com/2022/04/29/d365-ce-fo-large-transactional-volumes/) on 2022-04-29* (recovered from web archive).
