import React, { useState } from "react";

const Images =()=>{
    const arr=[ "cars","animals","buildings","bikes"];
    const arr1 =[260,330,450];
    const images =[ 
        {
            "class":"small",
            "url":"https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg",
            "type":arr[0],
            "size": arr1[0]
        },{
            "class":"medium",
            "url":"https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg",
            "type":arr[1],
            "size":arr1[1]
        },{
            "class":"large",
            "url":"https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-2180c3d181555154d1bc13ffbbf05f29.jpg",
            "type":arr[0],
            "size":arr1[2]
        },{
            "class":"small",
            "url":"https://images.fineartamerica.com/images-medium-large-5/empire-state-building-portrait-gary-eason.jpg",
            "type":arr[2],
            "size": arr1[0]
        },{
            "class":"medium",
            "url":"https://i.pinimg.com/736x/b3/fd/1a/b3fd1aad187e100e23bfd844fefdc1ab.jpg",
            "type":arr[3],
            "size":arr1[1]
        },{
            "class":"large",
            "url":"https://imageio.forbes.com/specials-images/imageserve/5faad55af0851928cb60532b/Best-Animal-Photos-Contest--highland-cattle-in-heather-blooming-season-amid-fog-/0x0.jpg",
            "type":arr[1],
            "size":arr1[2]
        },{
            "class":"small",
            "url":"https://i.pinimg.com/736x/22/14/dd/2214ddaf4cd55f8a6ea207ee62ccd313.jpg",
            "type":arr[3],
            "size": arr1[0]
        },{
            "class":"medium",
            "url":"https://w0.peakpx.com/wallpaper/899/803/HD-wallpaper-vintage-tupac2x-car-cars-cool-lights-love-new-tail-lights-vehicle-thumbnail.jpg",
            "type":arr[0],
            "size":arr1[1]
        },{
            "class":"large",
            "url":"https://pyxis.nymag.com/v1/imgs/5a7/802/d285e36abf02edae528f033b582b4bc159-14-im-pei-1.w710.jpg",
            "type":arr[2],
            "size":arr1[2]
        },{
            "class":"large",
            "url":"https://static3.depositphotos.com/1000949/122/i/950/depositphotos_1227726-stock-photo-old-bike.jpg",
            "type":arr[3],
            "size":arr1[2]
        },{
            "class":"small",
            "url":"https://imageio.forbes.com/specials-images/imageserve/5faad9ab2a368d4f8860532b/Best-Animal-Photos-Agora-Contest--mother-monkey-with-baby/960x0.jpg",
            "type":arr[1],
            "size": arr1[0]
        },{
            "class":"medium",
            "url":"https://i.pinimg.com/550x/f1/92/9c/f1929c57cd7040cf550207a15720be7c.jpg",
            "type":arr[3],
            "size":arr1[1]
        },{
            "class":"large",
            "url":"https://imageio.forbes.com/specials-images/imageserve/5faad60e9317699561e5b876/Best-Animal-Photos-contest--Reindeer-at-the-end-of-fall-as-first-snow-falls-/960x0.jpg",
            "type":arr[1],
            "size":arr1[2]
        },{
            "class":"large",
            "url":"https://media-cdn.tripadvisor.com/media/photo-s/0f/d9/d5/a0/burj-khalifa-in-between.jpg",
            "type":arr[2],
            "size":arr1[2]
        },{
            "class":"medium",
            "url":"https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-5f68d2aa1217e8e3e47797486a71e607.jpg",
            "type":arr[0],
            "size":arr1[1]
        },{
            "class":"large",
            "url":"https://s.abcnews.com/images/Business/bugatti-01-ht-jc-210629_1624984429880_hpMain_1x1_992.jpg",
            "type":arr[0],
            "size":arr1[2]
        },{
            "class":"medium",
            "url":"https://thumbs.dreamstime.com/b/modern-office-building-marunouchi-plaza-twilight-portrait-orientation-modern-office-building-marunouchi-plaza-151791882.jpg",
            "type":arr[2],
            "size":arr1[1]
        },{
            "class":"small",
            "url":"https://i.pinimg.com/136x136/76/db/d0/76dbd06881bfa8b1644e6239b03ff424.jpg",
            "type":arr[3],
            "size": arr1[0]
        },{
            "class":"small",
            "url":"https://media.architecturaldigest.com/photos/5d3f32af8729d80008c90572/master/w_1600%2Cc_limit/GettyImages-656311250.jpg",
            "type":arr[2],
            "size": arr1[0]
        },{
            "class":"small",
            "url":"https://mymodernmet.com/wp/wp-content/uploads/2018/03/george-wheelhouse-animal-portraits-1.jpg",
            "type":arr[1],
            "size": arr1[0]
        }

    ]

    const [selectFilter,setSelectFilter] = useState('');
    const [selectSort,setSelectSort] =useState('');
    const [selectSort1,setSelectSort1] =useState('');

    const filterImages = selectFilter ?images.filter((image)=> image.type === selectFilter): images;

    const sortedImages = selectSort ? [...filterImages].sort((a,b)=> a.size - b.size) : filterImages;

    const sortedImages1 = selectSort1 ? [...sortedImages].sort((a,b)=> b.size - a.size) : sortedImages
    
    

    const handleAll =()=>{
        setSelectFilter('');
    }
    const handleSort=()=>{
        setSelectSort('');
        setSelectSort1('');
        
    }
    return(
        <>
        <h1>Masonary Image Gallery</h1>
        <br />
        <div className="filter">
            <h3>Filter:-</h3>
        <button className="button" onClick={()=>{handleAll();}}>All</button>
        {arr.map((value,index)=>{
            const handleFilter=()=>{
                setSelectFilter(value);
                setSelectSort('');
                setSelectSort1('');
            }
                   
            return(
                <>
                
            <button key={index+1000} className="button" onClick={()=>{handleFilter();}}>{value}</button>
            </>
            )
        })}
        </div>
        <br />
        <div className="sort">
            <h3>Sort:-</h3>
            <button className="button1" onClick={()=>{handleSort();}}>Reset</button>
            <button className="button1" onClick={()=>{setSelectSort(arr1[0])}}>Small</button>
            <button className="button1" onClick={()=>{setSelectSort1(arr1[2])}}>Large</button>
        </div>
        <br />
        <div className="images">
        
        { sortedImages1.map((image,index)=>{

            return(

                <div key={index} className={image.class}><img src={image.url} alt={image.type}/></div>
            )
        })}
            </div></>
    )
}

export default Images;