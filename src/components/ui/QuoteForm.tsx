'use client';
import React, { useState } from 'react';

import { FaCheck } from 'react-icons/fa';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    serviceType: 'residential',
    servicesRequired: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real implementation, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        phone: '',
        address: '',
        serviceType: 'residential',
        servicesRequired: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
          <FaCheck className="text-emerald-500 text-2xl" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your quote request has been submitted successfully. We'll contact you shortly!
        </p>
        <button 
          onClick={() => setSubmitSuccess(false)}
          className="btn-primary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Property Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Property Address (Street, Suburb)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Service Type</label>
        <div className="flex space-x-6">
          <div className="flex items-center">
            <button
              type="button"
              className={`w-5 h-5 rounded-sm mr-2 flex items-center justify-center ${formData.serviceType === 'residential' ? 'bg-emerald-500' : 'border border-gray-300'}`}
              onClick={() => handleRadioChange('residential')}
            >
              {formData.serviceType === 'residential' && <FaCheck className="text-white text-xs" />}
            </button>
            <label>Residential</label>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className={`w-5 h-5 rounded-sm mr-2 flex items-center justify-center ${formData.serviceType === 'commercial' ? 'bg-emerald-500' : 'border border-gray-300'}`}
              onClick={() => handleRadioChange('commercial')}
            >
              {formData.serviceType === 'commercial' && <FaCheck className="text-white text-xs" />}
            </button>
            <label>Commercial</label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="servicesRequired" className="block text-gray-700 font-medium mb-2">Services Required</label>
        <select
          id="servicesRequired"
          name="servicesRequired"
          value={formData.servicesRequired}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        >
          <option value="">Select service(s)</option>
          <option value="Pressure Cleaning">Pressure Cleaning</option>
          <option value="House Washing / Soft Washing">House Washing / Soft Washing</option>
          <option value="External Window Cleaning">External Window Cleaning</option>
          <option value="Biocidal Roof Treatment">Biocidal Roof Treatment</option>
          <option value="Multiple Services">Multiple Services</option>
          <option value="Other">Other (Please specify below)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (Provide details about the job, e.g., size, specific areas, level of dirt)"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="btn-primary py-3 px-8 text-lg w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request My Free Quote'}
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
