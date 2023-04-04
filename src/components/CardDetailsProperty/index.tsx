
import data from '../../mock/index.json'
import Image from 'next/image'


interface Props {
  title: string, 
  subtitle: string,
  description: string,
  details: string[],
  index: string | number,
  img1: string,
  img2: string,
  img3: string,
  comments: {
    comment:string,
    user: string,
    data: string,
  }[],
  // comments: [],
  // user: string,
  // data: string,
  // comment:string,
  raiting: string | number,
  price: string | number,
  owner: {
    name:string,
    dateOfMember:string,
    contact:string, 
    info: string,
  },
}


export default function CardDetailsProperty(props: Props) {


  const {title, subtitle, description, details, img1,img2, img3, comments,raiting,price, owner} = props;

  return (
    <div>
      <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <Image src={img1} alt="Imagem 1"  width={300} height={300} unoptimized={true}/>
      <Image src={img2} alt="Imagem 2"  width={300} height={300} unoptimized={true}/>
      <Image src={img3} alt="Imagem 3"  width={300} height={300} unoptimized={true}/>
      <p>Avaliação: {raiting}/50 ({data[0]["raiting-average"]} estrelas)</p>
      <p>Preço por diária: {price}</p>
      <h4>Comentários:</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.comment}</p>
            <p>
              {comment.user} - {comment.data[0]}
            </p>
          </li>
        ))}
      </ul>
      <h4>Proprietário:</h4>
      <p>{owner.name}</p>
      <p>Membro desde {owner.dateOfMember}</p>
      <p>Contato: {owner.contact}</p>
      <p>{owner.info}</p>
    </div>
    <div>

    </div>
    </div>
  )
}
