import Card from "./Card"
// import "./propsTask.css"
const PropsTask=()=>{
    const data=[
        {
            name:"Doremon",
            username:"@Dora__",
            img:"https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg?v=1735571897&width=1500",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Nobita",
            username:"@Nobi__",
            img:"https://m.media-amazon.com/images/M/MV5BODZmM2I5MmUtMWM3Ni00ZjE3LWI2YzMtMDgxMTcxOGQ2NjUzXkEyXkFqcGc@._V1_.jpg",
            posts:"100",
            following:1,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"1.5M"
        },
        {
            name:"Sizuka",
            username:"@sizu__",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5Sc222hnilRr90fTfIqgAxYzqpppfYoAGg&s",
            posts:"190",
            following:120,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"2.5M"
        },
        {
            name:"Sofia",
            username:"@sofi",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcFlj150LjUxzahPY-KngR4DGDMMKpOfbHmHbNT6H4A&s=10",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Motu",
            username:"@Motu__",
            img:"https://m.media-amazon.com/images/S/pv-target-images/b8a69fc88d7125c4ba30ef9dacdd228688608d4918447b68480dc0d9e7be7fac.jpg",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Bheem",
            username:"@Bom__",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlGMD1fcCHD2Deu3AiqHMFu6TMs36wdRhjOf-K8m0Zqg1zw4XKCoYnDA&s=10",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Yumiko",
            username:"@yumi__",
            img:"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/27/1734184800027-h",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Cindrela",
            username:"@Cin__",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrh81ZMJmEc8mZv1Dx0kDkIjMGEF9-El1v7eTQvZvQ75QacoCG1k-u6YC&s=10",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Hati",
            username:"@Hati__",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZVuEdXPluOoMw_RjXLSLb7WwPD6omjRttzP8t5vDBbHFmy2RHcvqDPQse&s=10",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        },
        {
            name:"Panda",
            username:"@Pan__",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNc4Wguv1r36iW42zegsYypRMEdu5R1YVdVFYqUunxHg&s=10",
            posts:"180",
            following:10,
            about:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum",
            followers:"3M"
        }
    ]
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    return(
        <div className="cards">
           <Card user={data[0]}/>
           <Card user={data[1]}/>
           <Card user={data[2]}/>
           <Card user={data[3]}/>
           <Card user={data[4]}/>
           <Card user={data[5]}/>
           <Card user={data[6]}/>
           <Card user={data[7]}/>
           <Card user={data[8]}/>
           <Card user={data[9]}/>

        </div>
    )
}
export default PropsTask