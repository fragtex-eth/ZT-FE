export interface IDataToggleProps {
    options: string[];
    onToggle: React.Dispatch<React.SetStateAction<string>>| ((value: string) => void);
    selectedValue: string;
    className?: string;
  }
  