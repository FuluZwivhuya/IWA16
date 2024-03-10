const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  //my practice
  const firstName1 = (data["response"]["data"]["NM372"]["firstName"]);
  const surname1 = (data["response"]["data"]["NM372"]["surname"]);
  const id1 = (data["response"]["data"]["NM372"]["id"]);
  const race1 = (data["response"]["data"]["NM372"]["races"]).length;
  const EventDate1 = (data["response"]["data"]["NM372"]["races"])

  console.log(race1);

  const firstName2 = (data["response"]["data"]["SV782"]["firstName"]);
  const surname2 = (data["response"]["data"]["SV782"]["surname"]);
  const id2 = (data["response"]["data"]["SV782"]["id"])
  const race2 = (data["response"]["data"]["SV782"]["races"]).length;
  const EventDate2 =(data["response"]["data"]["NM372"]["races"])
  


  // Only edit below this comment

  
  /*const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const [date, time] = races.reverse();
  
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);*/
  
    const section1 = document.querySelector('[data-athlete="NM372"]');
    const h2a = document.createElement('h2');
    const list1 = document.createElement ('dl');
    section1.append(h2a);
    section1.append(list1);
    h2a.innerText = id1;
    list1.innerText = 
    `Athlete:${firstName1} ${surname1}
    \n Total Races: ${race1}
    \n Event Date(Latest):
    \n Total time:`;

    const section2 =document.querySelector('[data-athlete="SV782"]');
    const h2b = document.createElement('h2');
    const list2 = document.createElement('dl');
    section2.append(h2b);
    section2.append(list2);
    h2b.innerText=id2;
    list2.innerText =
    `Athlete:${firstName2} ${surname2}
     \n Total Races: ${race2}
     \n Event Date(Latest):
     \n Total time:`;

    
   /* const day = date.getUTCDate();
    const month = MONTHS[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    const total = time.reduce((acc, curr) => acc + curr, 0);
    const hours = total / 60;
    const minutes = hours / 60;
  

    list.innerText = `
      <h2>${[data-athlete]}</h2>
      <dd>${firstName1}${surname1}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day}${month}${year}</dd>
    `;
  }
  [NM372], [SV782] = data
document.querySelector(data).appendChild(createHtml(NM372));
document.querySelector(data).appendChild(createHtml(SV782));*/