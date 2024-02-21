import  { useState } from 'react';
import CampoJSON from '../Components/CampoJson/CampoJson';
import JSONViewer from '../Components/JsonField/JsonField'; // Ajusta la ruta según tu estructura de archivos
import "./Generator.css";

const MiComponente = () => {
  const [campos, setCampos] = useState([<CampoJSON key={0} onChange={() => {}} onRemove={() => {}} />]);

  const handleAddCampo = () => {
    const nuevoCampo = <CampoJSON key={campos.length} onChange={() => {}} onRemove={() => handleRemoveCampo(campos.length)} />;
    setCampos([...campos, nuevoCampo]);
  };

  const handleRemoveCampo = (index) => {
    if (campos.length === 1) return; // Evitar eliminar el último campo
    const nuevosCampos = campos.filter((campo, i) => i !== index);
    setCampos(nuevosCampos);
  };

  // Objeto JSON que deseas mostrar
  const jsonData = {
    "texto": "Texto de ejemplo",
    "numero": 42,
    "booleano": true,
    "arreglo": [1, 2, 3],
    "objetoInterno": {
      "propiedad": "valor"
    }
  };

  return (
    <div className='GeneratorJson'>        
        <div className="TextImputs">
            <button className='AddButton' onClick={handleAddCampo}>Add</button>
            <div>
                {campos.map((campo, index) => (
                    <div className="TextImputsButton" key={index}>
                    {campo}
                    <button onClick={() => handleRemoveCampo(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
        <JSONViewer jsonData={jsonData} />
    </div>
  );
};

export default MiComponente;