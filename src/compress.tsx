import React from 'react'
import imageCompression from 'browser-image-compression';

interface compressProps {
    file: File,
}

const options = {
    thumbSize: {
        maxSizeMB: .5,
        maxWidthOrHeight: 500,
        useWebWorker: true,
    },
    tittleImage: {
        maxSizeMB: .7,
        maxWidthOrHeight: 700,
        useWebWorker: true,
    },
    full: {
        maxSizeMB: .8,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
    },

}





const compress: React.FC<compressProps> = ({ file }) => {


    const handleCompressThumbnail = async (cuOptions: any) => {
        try {
            const compressedFile = await imageCompression(file, cuOptions);
            console.log(compressedFile);
        }
        catch (error) {
            console.log(error);
        }
    };


    const compressAllSizes = async () => {
        const fileArr: File[] = []
        try {
            Object.values(options).forEach(async (cuOptions: any) => {
                const compressedFile = await imageCompression(file, cuOptions);
                fileArr.push(compressedFile)
            });
            console.log(fileArr);
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <button onClick={() => handleCompressThumbnail(options.thumbSize)}>Compress Thumbnail</button>
            <button onClick={() => handleCompressThumbnail(options.tittleImage)}>Compress Tittle Image</button>
            <button onClick={() => handleCompressThumbnail(options.full)}>Compress Full</button>
            <button onClick={compressAllSizes}>All</button>
        </div>
    );
}

export default compress;