export const PropertyContext = createContext();
export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        propertyService.getAll()
            .then(result => {
                setProperties(result);
            }).catch(err => {
                alert(err);
            });
    }, []);
    const context = {
        properties,
    };

    return (
        <PropertyContext.Provider value={context}>
            {children}
        </PropertyContext.Provider>
    );
};

export const usePropertyContext = () => {
    return useContext(PropertyContext);
};