import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER } from "../lib/config";

interface AppointmentFormProps {
  businessName: string;
  services?: string[];
}

export function AppointmentForm({ businessName, services }: AppointmentFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services?.[0] ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `New appointment request — ${businessName}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      service ? `Service: ${service}` : null,
      `Date: ${date}`,
      `Time: ${time}`,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">Full name</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Jane Doe" />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">Phone</span>
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+1 555 000 0000" />
        </label>
      </div>
      {services && services.length > 0 && (
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">Service</span>
          <select value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">Preferred date</span>
          <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">Preferred time</span>
          <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} className={inputClass} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-card-foreground">Notes (optional)</span>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className={inputClass} placeholder="Anything we should know" />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
      >
        Request via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens WhatsApp with your appointment details pre-filled to confirm with our team.
      </p>
    </form>
  );
}
