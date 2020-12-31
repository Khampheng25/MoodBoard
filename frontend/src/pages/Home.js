import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
    const [imageIds, setImageIds] = useState(null);
    useEffect(() => {
        async function loadImages() {
            try {
                const res = await fetch('http://localhost:3001/api/images');
                let data = await res.json()
                setImageIds(data)
            } catch (err) {
                console.error(err);
            }
        };
        loadImages();
    }, []);
    return (
        <div>
            <h1 className="title">Gallery of Images</h1>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName='khampheng'
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    );
}
