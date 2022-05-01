// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { useState, useEffect } from 'react';
import { Card, Footer } from '@janca/components';

const speedUnits = [
  {
    label: 'Kb/s',
    bits: 1000
  },
  {
    label: 'Mb/s',
    bits: 1000000
  },
  {
    label: 'Gb/s',
    bits: 1000000000
  }
];

const fileUnits = [
  {
    label: 'KB',
    bits: 1
  },
  {
    label: 'MB',
    bits: 1024
  },
  {
    label: 'GB',
    bits: 1024 * 1024
  }
];

function App() {

  const [internetSpeed, setInternetSpeed] = useState(0);
  const [filesize, setFileSize] = useState(0);

  const [speedUnit, setSpeedUnit] = useState(1000000);
  const [fileUnit, setFileUnit] = useState(1024);

  const [downloadTime, setDownloadTime] = useState("0h0m0s");

  useEffect(() => {
    if (internetSpeed > 0 && filesize > 0) {

      const speedSize = internetSpeed * speedUnit
      const fileSize = (((filesize * fileUnit) * 1024) * 8);

      const filetime = fileSize / speedSize;
      const hourmod = filetime % 3600;
      const hour = Math.floor(filetime / 3600);
      const minute = Math.floor(hourmod / 60);
      const second = Math.floor(filetime % 60);

      setDownloadTime(`${hour}h ${minute}m ${second}s`)
    }
  }, [internetSpeed, speedUnit, filesize, fileUnit]);

  return (
    <div className="flex mx-auto items-center place-content-center h-screen container">
      <Card className="py-6 mx-auto bg-gray-800/30 max-w-xl w-full">
        <div className="flex flex-col gap-4">

          <Card className='bg-teal-500/10'>
            <div className="transition text-white duration-150 ease-in-out my-4">
              <p className="">Tiempo de Descarga</p>
              <h4 className="lg:text-5xl text-3xl font-bold">
                {downloadTime}
              </h4>
            </div>
          </Card>

          <Card className={`bg-teal-500/10`}>
            {/* Download speed */}
            <div>
              <label htmlFor="speed-unit">Velocidad de Internet</label>
              <div className={styles['input-group']}>
                <input step="0.00" min="0" className={styles['text-input']} value={internetSpeed}
                  onChange={(e) => setInternetSpeed(e.target.valueAsNumber)} type="number" name="speed-unit" id="speed-unit" placeholder="0" />
                <div className={styles['group-input-radio']}>
                  <div className="flex justify-center">
                    {speedUnits.map((unit, index) => (
                      <div key={index} className={`${styles['text-input']} ${styles['text-input-unit']}`}>

                        <input type="radio" name="speed-unit" id={`speed-unit-${index}`} value={unit.bits}
                          checked={speedUnit === unit.bits}
                          onChange={() => setSpeedUnit(unit.bits)} hidden />

                        <label htmlFor={`speed-unit-${index}`}>{unit.label}</label>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Download speed */}

            {/* File size */}
            <div>
              <label htmlFor="filesize">Tamaño de Archivo</label>
              <div className={styles['input-group']}>
                <input
                  step="0.00" min="0"
                  type="number"
                  value={filesize}
                  onChange={(e) => setFileSize(e.target.valueAsNumber)}
                  id="filesize"
                  className={styles['text-input']}
                  placeholder="0" />

                <div className={styles['group-input-radio']}>
                  <div className="flex justify-center">
                    {fileUnits.map((unit, index) => (
                      <div key={index} className={`${styles['text-input']} ${styles['text-input-unit']}`}>
                        <input type="radio" name="file-unit" id={`file-unit-${index}`} value={unit.bits}
                          checked={fileUnit === unit.bits}
                          onChange={() => setFileUnit(unit.bits)} />
                        <label htmlFor={`file-unit-${index}`}>{unit.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* File size */}

          </Card>
        </div>

        <Footer />
      </Card>
    </div>
  );
}

export default App;
