import { useState, useMemo, useCallback, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { GiSadCrab } from 'react-icons/gi';

import { Button, Loader, Modal } from '../components';
import images from '../assets';
import Input from '../components/Input';
import { NFTContext } from '../context/NFTContext';

const CreateNFT = () => {
  const [imageFileURL, setimageFileURL] = useState(null);
  const [musicFileURL, setmusicFileURL] = useState(null);
    const [imageFileID, setimageFileID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [fileUrl, setFileUrl] = useState(null);
  // const [fileID, setFileID] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const { theme } = useTheme();
  const [formInput, setFormInput] = useState({ price: '', name: '', description: '' });
  const { uploadToIPFS, createNFT, isLoadingNFT } = useContext(NFTContext);
  const router = useRouter();

  const [creationSuccessful, setcreationSuccessful] = useState(true);

  // const onDrop = useCallback(async (acceptedFiles) => {
  //   setIsLoading(true);
  //   const url = await uploadToIPFS(acceptedFiles);
  //   setIsLoading(false);
  //   try {
  //     setFileUrl(url);
  //     setFileID(url.substring(url.indexOf('/') + 2, url.indexOf('.')));
  //   } catch (e) {
  //     console.log('Max file size exceeded', e);
  //   }
  // }, []);
    
  // const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
  //   onDrop,
  //   accept: 'image/*',
  //   maxSize: 5000000,
  // });


useEffect(() => {
  if (imageFileID) {
    console.log(`image ` + imageFileID);
  }
}, [imageFileID]);

  const onImageDrop = useCallback(async (acceptedFiles) => {
  setIsLoading(true);
    const url = await uploadToIPFS(acceptedFiles);
        console.log(url);

  try {
    setimageFileURL(url);
    setimageFileID(url.substring(url.indexOf('/') + 2, url.indexOf('.')));
    console.log(`image `+ imageFileID);
  } catch (e) {
    console.log('Max file size exceeded', e);
  }
      setIsLoading(false);

}, []);

const onAudioDrop = useCallback(async (acceptedFiles) => {
  setIsLoading(true);
  const url = await uploadToIPFS(acceptedFiles,);
        console.log(url);

  setIsLoading(false);
  try {
    setmusicFileURL(url);
  } catch (e) {
    console.log('Max file size exceeded', e);
  }
}, []);

const { getRootProps: getRootImageProps, getInputProps: getInputImageProps, isDragActive: isImageDragActive, isDragAccept: isImageDragAccept, isDragReject: isImageDragReject } = useDropzone({
  onDrop: onImageDrop,
  accept: 'image/*',
  maxSize: 5000000,
});

const { getRootProps: getRootAudioProps, getInputProps: getInputAudioProps, isDragActive: isAudioDragActive, isDragAccept: isAudioDragAccept, isDragReject: isAudioDragReject } = useDropzone({
  onDrop: onAudioDrop,
  accept: 'audio/*',
  maxSize: 5000000,
});

 

  console.log(formInput);

  const imageStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg:white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
    ${isImageDragActive ? 'border-file-active' : undefined}
    ${isImageDragAccept ? 'border-file-accept' : undefined}
    ${isImageDragReject ? 'border-file-reject' : undefined}`
  ), [isImageDragActive, isImageDragAccept, isImageDragReject]);

    const audioStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg:white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
    ${isAudioDragActive ? 'border-file-active' : undefined}
    ${isAudioDragAccept ? 'border-file-accept' : undefined}
    ${isAudioDragReject ? 'border-file-reject' : undefined}`
  ), [isAudioDragActive, isAudioDragAccept, isAudioDragReject]);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full">
        <h1 className="font-cinzelDecorative dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-bold ml-4 xs::ml-0">Create An NFT</h1>
        <div className="mt-16">
          <p className="font-cinzelDecorative dark:text-white text-nft-black-1 font-bold text-xl">Upload File</p>
          <div className="mt-4">
            <div {...getRootImageProps()} className= {imageStyle}>
              <input {...getInputImageProps()} />
              <div className="flex-center flex-col text-center">
                {!isLoading ? (
                  <>
                    <p className=" font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">JPG, PNG, GIF, SVG, WEBM. Max 5Mb.</p>
                    <div className="my-12 w-full flex flex-col justify-center">
                      <Image
                        src={images.upload}
                        width={100}
                        height={100}
                        objectFit="contain"
                        alt="file_upload"
                        className={theme === 'light' ? 'filter invert' : undefined}
                      />
                    </div>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm">Drag and drop file</p>
                    <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm mt-2">Or browse media on your device</p>
                  </>
                ) : <Loader /> }
              </div>
            </div>
            {imageFileURL && (
              <aside>
                <div>
                  <img src={imageFileURL} alt="asset_file" />
                </div>
              </aside>
            )}
          </div>

        </div>
        <div className="mt-16">
          <p className="font-cinzelDecorative dark:text-white text-nft-black-1 font-bold text-xl">Upload File</p>
          <div className="mt-4">
            <div {...getRootAudioProps()} className= {audioStyle}>
              <input {...getInputAudioProps()} />
              <div className="flex-center flex-col text-center">
                {!isLoading ? (
                  <>
                    <p className="text-xl font-bold mb-4">Drop your audio file here</p>
                    <p className="text-lg mb-4">Acceptable file types: mp3, wav, ogg</p>
                    <p className="text-lg mb-4">Max file size: 5MB</p>
                    {isAudioDragReject && <p className="text-red-500 font-bold">File type not accepted or file too large</p>}
                  </>
                ) : <Loader /> }
              </div>
            </div>
            {musicFileURL && <p className="mt-4 text-lg font-bold">Uploaded audio file: {musicFileURL}</p>}
                        <audio className="relative mx-auto mt-5 w-50% h-[50px]" src={musicFileURL} controls />


          </div>

        </div>
        <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
          handleClick={(e) => { setFormInput({ ...formInput, name: e.target.value });}}
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="Description Of Your Item"
          handleClick={(e) => { setFormInput({ ...formInput, description: e.target.value }); }}
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="10 Eth"
          handleClick={(e) => { setFormInput({ ...formInput, price: e.target.value }); }}
        />
        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create NFT"
            className="rounded-xl"
            handleClick={async () => {
              const created = await createNFT(formInput, imageFileURL, router, imageFileID , musicFileURL );
              if (!created) {
                console.log('Not created');
                setcreationSuccessful(false);
              }
            }}
          />
          {!creationSuccessful && (
          <div>
            <Modal
              header="Error!"
              body={(
                <div className="flexCenter flex-col text-center">
                  <div className="relative w-200 h-20 font-cinzelDecorative">
                    <span className="">Error buying NFT, please ensure your wallet has enough funds!</span>
                  </div>
                  <GiSadCrab size={50} />
                </div>
            )}
              handleClose={() => { setcreationSuccessful(true); }}
            />
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
