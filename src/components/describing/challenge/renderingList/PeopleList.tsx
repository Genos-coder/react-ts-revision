
export default function PeopleList() {
  const  otherProfession= people.map(person =>{
    if(person.profession !== "chemist"){
      return;
    }
        return <li key={person.id}>
             <img
        src={getImageUrl(person)}
        alt={person.name}
        />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
        </li>
     })
     const filteredChemist =  people.map(person =>{
      if(person.profession === "chemist"){
        return;
      }
          return <li key={person.id}>
               <img
          src={getImageUrl(person)}
          alt={person.name}
          />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
          </li>
       })
  return (
    <article >
      <h1>Scientists</h1>
      <div style={{border:"2px solid black" ,padding:"1rem",marginBottom:"1rem"}}>
        <h2>These are  profession of chemist</h2>
      <ul>
            {filteredChemist}
        </ul>
      </div>
      <div style={{border:"2px solid black" ,padding:"1rem"}}>
        <h2>These are other profession</h2>
        <ul>
        {otherProfession}

      </ul>
      </div>
    </article>
  );
}


export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  
  export function getImageUrl(person: {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
}) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
  